package com.afonsohmm.vaadinjettysample;

import com.vaadin.addon.charts.Chart;
import com.vaadin.addon.charts.model.ChartType;
import com.vaadin.addon.charts.model.DataSeries;
import com.vaadin.addon.charts.model.DataSeriesItem;
import com.vaadin.addon.charts.model.Labels;
import com.vaadin.addon.charts.model.PlotOptionsPie;
import com.vaadin.addon.charts.model.Tooltip;
import com.vaadin.addon.charts.model.style.Color;
import com.vaadin.addon.charts.model.style.SolidColor;
import com.vaadin.annotations.Theme;
import com.vaadin.annotations.Title;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.annotations.Widgetset;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Label;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;
import java.util.LinkedList;
import javax.servlet.annotation.WebServlet;

@Theme("mytheme")
@Widgetset("com.afonsohmm.vaadinjettysample.AppWidgetSet")
@Title("VaadinJettySample")
@SuppressWarnings("serial")
public class MyVaadinUI extends UI
{

    //@WebServlet(value = "/*", asyncSupported = true)
    //@VaadinServletConfiguration(productionMode = false, ui = MyVaadinUI.class, widgetset = "com.afonsohmm.vaadinjettysample.AppWidgetSet")
    public static class Servlet extends VaadinServlet {       
        
    }

    @Override
    protected void init(VaadinRequest request) {
        final VerticalLayout layout = new VerticalLayout();
        layout.setMargin(true);
        setContent(layout);
        
        Button button = new Button("Click Me");
        button.addClickListener(new Button.ClickListener() {
            public void buttonClick(ClickEvent event) {
                layout.addComponent(new Label("Thank you for clicking"));
            }
        });
        layout.addComponent(button);
        
        int count = 0;
        
        Chart chart = new Chart(ChartType.PIE);
        chart.setCaption("Teste");
        chart.getConfiguration().setTitle("");
        chart.getConfiguration().getChart().setType(ChartType.PIE);
        chart.getConfiguration().getChart().setAnimation(true);
        chart.setWidth("100%");
        chart.setHeight("90%");
        Color[] chartColors = new Color[]{
            new SolidColor("#3090F0"), new SolidColor("#18DDBB"),
            new SolidColor("#98DF58"), new SolidColor("#F9DD51"),
            new SolidColor("#F09042"), new SolidColor("#EC6464")};

        DataSeries series = new DataSeries();

        Tooltip tooltip = new Tooltip();
        tooltip.setFormatter("this.point.name +': '+ this.y +' minutos'");
        chart.getConfiguration().setTooltip(tooltip);
        
        for (int i = 0; i < 10; i++) {            
            DataSeriesItem item = new DataSeriesItem("Sessão " + i,
                    (i*2));
            series.add(item);
            item.setColor(chartColors[count]);
            count++;
            if (count > 5) {
                count = 0;
            }
        }     
        chart.getConfiguration().setSeries(series);

        PlotOptionsPie opts = new PlotOptionsPie();
        opts.setBorderWidth(0);
        opts.setShadow(false);
        opts.setAnimation(true);
        Labels dataLabels = new Labels();
        dataLabels.setEnabled(false);
        opts.setDataLabels(dataLabels);
        chart.getConfiguration().setPlotOptions(opts);
        
        layout.addComponent(chart);
        
        
    }
    
    @WebServlet(urlPatterns = "/*", name = "MyUIServlet", asyncSupported = true)
    @VaadinServletConfiguration(ui = MyVaadinUI.class, productionMode = false)
    public static class MyUIServlet extends VaadinServlet {

    }

}

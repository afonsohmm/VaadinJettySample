/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.afonsohmm.vaadinjettysample;

import com.vaadin.server.VaadinServlet;
import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.nio.SelectChannelConnector;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.webapp.WebAppContext;

/**
 *
 * @author afonso
 */
public class JLauncher {

    private static final int PORT = 8889;

    /**
     *
     * Test server for the addon.
     *
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        Server server = startServer(PORT);
    }

    public static Server startServer(int port) throws Exception {

        Server server = new Server();

        final Connector connector = new SelectChannelConnector();

        connector.setPort(port);
        server.setConnectors(new Connector[]{connector});

        WebAppContext context = new WebAppContext();
        VaadinServlet vaadinServlet = new VaadinServlet() {
        };

        ServletHolder servletHolder = new ServletHolder(vaadinServlet);
        servletHolder.setInitParameter("ui", MyVaadinUI.class.getName());

        context.setWar(System.getProperty("user.dir"));
        context.setContextPath("/");

        context.addServlet(servletHolder, "/*");
        server.setHandler(context);
        server.start();
        return server;
    }

}

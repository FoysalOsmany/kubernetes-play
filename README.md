# Kubernetes Basic

## RESOURCES
### PODS: contains single or multiple container
### REPLICATION CONTROLLER: manage replicas and refer to pod
### REPLICATION SET: replication set is an upgraded version of replication controller
### DEPLOYMENT: deployment use replication set internally to manage replicas, rolling updates and pods from single yml file
                B/G: all at once
                Canary: incremental
### SERVICE: service used to manage networks and connect different resources

## OVERVIEW
    * kubectl get all
    * kubectl get all --all-namespaces
    * kubectl logs [pod-name]
    * kubectl exec -it [pod-name] -- [command to run]
    * kubectl exec -it node-deployment-6695464cc5-x6gzk -- /bin/sh
    * kubectl logs [pod-name]

## CONTEXT
    * kubectl config get-contexts
    * kubectl config use-context docker-for-desktop
    * kubectl config current-context

## POD
    * kubectl get pods
    * kubectl get pods --show-labels
    * kubectl describe pod hello-pod
    * kubectl delete pod hello-pod
    * kubectl create -f pod-definition.yml

## REPLICATION CONTROLLER
    * kubectl create -f hello-replication-controller/rc-definition.yml
    * kubectl describe replicationcontroller/hello-rc

## DEPLOYMENT
    * kubectl get deployments
    * kubectl get deployment hello-deployment
    * kubectl describe deployments
    * kubectl describe deployment hello-deployment
    * kubectl delete deployment hello-deployment
    * kubectl create -f hello-deployment/hello-deployment.yml

## REPLICA SET
    * kubectl get rs

## SERVICE
    * kubectl get services
    * kubectl get service hello-service -o yaml
    * kubectl delete service hello-service -o yaml
    * kubectl create -f hello-service.yml


# c4k8s

## Presentation
This package is an extension of the `c4model` one.

The package provides pre configured Deployment Nodes (item and boundary) for each [Kubernetes resources](https://kubernetes.io/docs/reference/kubernetes-api/).

## Usage

### Bootstrap

The bootstrap may provide PlantUML artifacts like constants, procedures or style statements.

```plantuml
' loads the c4k8s bootstrap
include('c4k8s/bootstrap')
```

### Full inclusion

An additional include can be used to load all items in one shot.

 ```plantuml
' loads the bootstrap of `c4k8s` and all related items
include('c4k8s/full')
```

### Single inclusion

Finally, another include can be used to load the library's bootstrap, the package's bootstrap and all items' resources in one `!include` statement.

Include remotely the resources:
```plantuml
' loads the library, the bootstrap of `c4k8s` and all related items
!include https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution/c4k8s/single.puml
```

Include locally the resources:
```plantuml
' configures the library
!global $INCLUSION_MODE="local"
' loads the library, the bootstrap of `c4k8s` and all related items
!include <the relative path to the /distribution directory>/c4k8s/single.puml
```




# Modules

The package provides 2 modules.

- [c4k8s/Element](../c4k8s/Element/README.md) with 78 items
- [c4k8s/Boundary](../c4k8s/Boundary/README.md) with 78 items



# Examples

The package provides 1 examples.

## Deployment diagram

![Deployment diagram](../c4k8s/deployment_diagram.png)<br>
[The source file.](../c4k8s/deployment_diagram.puml)




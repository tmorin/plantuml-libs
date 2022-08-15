# eip-1

## Presentation
This package implements elements based on [codeclou/enterprise-integration-pattern-shapes-for-gliffy](https://github.com/codeclou/enterprise-integration-pattern-shapes-for-gliffy).

## Usage

### Bootstrap

The bootstrap may provide PlantUML artifacts like constants, procedures or style statements.

```plantuml
' loads the eip-1 bootstrap
include('eip-1/bootstrap')
```

### Full inclusion

An additional include can be used to load all items in one shot.

 ```plantuml
' loads the bootstrap of `eip-1` and all related items
include('eip-1/full')
```

### Single inclusion

Finally, another include can be used to load the library's bootstrap, the package's bootstrap and all items' resources in one `!include` statement.

Include remotely the resources:
```plantuml
' loads the library, the bootstrap of `eip-1` and all related items
!include https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution/eip-1/single.puml
```

Include locally the resources:
```plantuml
' configures the library
!global $INCLUSION_MODE="local"
' loads the library, the bootstrap of `eip-1` and all related items
!include <the relative path to the /distribution directory>/eip-1/single.puml
```




# Modules

The package provides 7 modules.

- [eip-1/MessageConstruction](../eip-1/MessageConstruction/README.md) with 10 items
- [eip-1/MessageRouting](../eip-1/MessageRouting/README.md) with 11 items
- [eip-1/MessageTransformation](../eip-1/MessageTransformation/README.md) with 5 items
- [eip-1/MessagingChannels](../eip-1/MessagingChannels/README.md) with 8 items
- [eip-1/MessagingEndpoints](../eip-1/MessagingEndpoints/README.md) with 11 items
- [eip-1/MessagingSystems](../eip-1/MessagingSystems/README.md) with 9 items
- [eip-1/SystemManagement](../eip-1/SystemManagement/README.md) with 7 items



# Examples

The package provides 3 examples.

## Message router

![Message router](../eip-1/message_router.png)<br>
[The source file.](../eip-1/message_router.puml)

## Pipes and filters

![Pipes and filters](../eip-1/pipes_and_filters.png)<br>
[The source file.](../eip-1/pipes_and_filters.puml)

## Simple

![Simple](../eip-1/simple.png)<br>
[The source file.](../eip-1/simple.puml)




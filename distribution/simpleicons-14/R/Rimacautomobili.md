# Rimacautomobili


```text
simpleicons-14/R/Rimacautomobili
```

```text
include('simpleicons-14/R/Rimacautomobili')
```



| Illustration | Rimacautomobili |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rimacautomobili.png) | ![illustration for Rimacautomobili](../../simpleicons-14/R/Rimacautomobili.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RimacautomobiliXs>`
- `<$RimacautomobiliSm>`
- `<$RimacautomobiliMd>`
- `<$RimacautomobiliLg>`





## Rimacautomobili

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rimacautomobili
include('simpleicons-14/R/Rimacautomobili')

' renders the element
Rimacautomobili('Rimacautomobili', 'Rimacautomobili', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rimacautomobili
include('simpleicons-14/R/Rimacautomobili')

' renders the element
Rimacautomobili('Rimacautomobili', 'Rimacautomobili', 'an optional tech label', 'an optional description')
@enduml
```


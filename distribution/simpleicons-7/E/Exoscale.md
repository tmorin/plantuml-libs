# Exoscale


```text
simpleicons-7/E/Exoscale
```

```text
include('simpleicons-7/E/Exoscale')
```



| Illustration | Exoscale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Exoscale.png) | ![illustration for Exoscale](../../simpleicons-7/E/Exoscale.Local.png) |




## Exoscale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Exoscale
include('simpleicons-7/E/Exoscale')

' renders the element
Exoscale('Exoscale', 'Exoscale', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Exoscale
include('simpleicons-7/E/Exoscale')

' renders the element
Exoscale('Exoscale', 'Exoscale', 'an optional tech label')
@enduml
```


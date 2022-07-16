# Snowpack


```text
simpleicons-7/S/Snowpack
```

```text
include('simpleicons-7/S/Snowpack')
```



| Illustration | Snowpack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Snowpack.png) | ![illustration for Snowpack](../../simpleicons-7/S/Snowpack.Local.png) |




## Snowpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Snowpack
include('simpleicons-7/S/Snowpack')

' renders the element
Snowpack('Snowpack', 'Snowpack', 'an optional tech label')
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

' loads the Item which embeds the element Snowpack
include('simpleicons-7/S/Snowpack')

' renders the element
Snowpack('Snowpack', 'Snowpack', 'an optional tech label')
@enduml
```


# Snowpack


```text
simpleicons-5/S/Snowpack
```

```text
include('simpleicons-5/S/Snowpack')
```



| Illustration | Snowpack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Snowpack.png) | ![illustration for Snowpack](../../simpleicons-5/S/Snowpack.Local.png) |




## Snowpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Snowpack
include('simpleicons-5/S/Snowpack')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Snowpack
include('simpleicons-5/S/Snowpack')

' renders the element
Snowpack('Snowpack', 'Snowpack', 'an optional tech label')
@enduml
```


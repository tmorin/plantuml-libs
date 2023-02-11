# Dsautomobiles


```text
simpleicons-8/D/Dsautomobiles
```

```text
include('simpleicons-8/D/Dsautomobiles')
```



| Illustration | Dsautomobiles |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Dsautomobiles.png) | ![illustration for Dsautomobiles](../../simpleicons-8/D/Dsautomobiles.Local.png) |




## Dsautomobiles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dsautomobiles
include('simpleicons-8/D/Dsautomobiles')

' renders the element
Dsautomobiles('Dsautomobiles', 'Dsautomobiles', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dsautomobiles
include('simpleicons-8/D/Dsautomobiles')

' renders the element
Dsautomobiles('Dsautomobiles', 'Dsautomobiles', 'an optional tech label', 'an optional description')
@enduml
```


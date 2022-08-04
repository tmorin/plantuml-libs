# Sports


```text
material-4/Social/Sports
```

```text
include('material-4/Social/Sports')
```



| Illustration | Sports |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Sports.png) | ![illustration for Sports](../../material-4/Social/Sports.Local.png) |




## Sports

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Sports
include('material-4/Social/Sports')

' renders the element
Sports('Sports', 'Sports', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Sports
include('material-4/Social/Sports')

' renders the element
Sports('Sports', 'Sports', 'an optional tech label', 'an optional description')
@enduml
```


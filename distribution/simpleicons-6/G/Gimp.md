# Gimp


```text
simpleicons-6/G/Gimp
```

```text
include('simpleicons-6/G/Gimp')
```



| Illustration | Gimp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gimp.png) | ![illustration for Gimp](../../simpleicons-6/G/Gimp.Local.png) |




## Gimp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gimp
include('simpleicons-6/G/Gimp')

' renders the element
Gimp('Gimp', 'Gimp', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gimp
include('simpleicons-6/G/Gimp')

' renders the element
Gimp('Gimp', 'Gimp', 'an optional tech label')
@enduml
```


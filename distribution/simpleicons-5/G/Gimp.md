# Gimp


```text
simpleicons-5/G/Gimp
```

```text
include('simpleicons-5/G/Gimp')
```



| Illustration | Gimp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gimp.png) | ![illustration for Gimp](../../simpleicons-5/G/Gimp.Local.png) |




## Gimp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gimp
include('simpleicons-5/G/Gimp')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gimp
include('simpleicons-5/G/Gimp')

' renders the element
Gimp('Gimp', 'Gimp', 'an optional tech label')
@enduml
```


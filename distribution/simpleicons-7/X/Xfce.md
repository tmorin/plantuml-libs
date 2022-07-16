# Xfce


```text
simpleicons-7/X/Xfce
```

```text
include('simpleicons-7/X/Xfce')
```



| Illustration | Xfce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/X/Xfce.png) | ![illustration for Xfce](../../simpleicons-7/X/Xfce.Local.png) |




## Xfce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Xfce
include('simpleicons-7/X/Xfce')

' renders the element
Xfce('Xfce', 'Xfce', 'an optional tech label')
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

' loads the Item which embeds the element Xfce
include('simpleicons-7/X/Xfce')

' renders the element
Xfce('Xfce', 'Xfce', 'an optional tech label')
@enduml
```


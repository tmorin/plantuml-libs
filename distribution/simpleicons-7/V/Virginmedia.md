# Virginmedia


```text
simpleicons-7/V/Virginmedia
```

```text
include('simpleicons-7/V/Virginmedia')
```



| Illustration | Virginmedia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Virginmedia.png) | ![illustration for Virginmedia](../../simpleicons-7/V/Virginmedia.Local.png) |




## Virginmedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Virginmedia
include('simpleicons-7/V/Virginmedia')

' renders the element
Virginmedia('Virginmedia', 'Virginmedia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Virginmedia
include('simpleicons-7/V/Virginmedia')

' renders the element
Virginmedia('Virginmedia', 'Virginmedia', 'an optional tech label', 'an optional description')
@enduml
```


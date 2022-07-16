# Gentoo


```text
simpleicons-7/G/Gentoo
```

```text
include('simpleicons-7/G/Gentoo')
```



| Illustration | Gentoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gentoo.png) | ![illustration for Gentoo](../../simpleicons-7/G/Gentoo.Local.png) |




## Gentoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gentoo
include('simpleicons-7/G/Gentoo')

' renders the element
Gentoo('Gentoo', 'Gentoo', 'an optional tech label')
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

' loads the Item which embeds the element Gentoo
include('simpleicons-7/G/Gentoo')

' renders the element
Gentoo('Gentoo', 'Gentoo', 'an optional tech label')
@enduml
```


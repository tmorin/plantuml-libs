# Gentoo


```text
simpleicons-5/G/Gentoo
```

```text
include('simpleicons-5/G/Gentoo')
```



| Illustration | Gentoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gentoo.png) | ![illustration for Gentoo](../../simpleicons-5/G/Gentoo.Local.png) |




## Gentoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gentoo
include('simpleicons-5/G/Gentoo')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gentoo
include('simpleicons-5/G/Gentoo')

' renders the element
Gentoo('Gentoo', 'Gentoo', 'an optional tech label')
@enduml
```


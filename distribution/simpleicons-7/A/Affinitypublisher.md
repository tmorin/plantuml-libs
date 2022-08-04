# Affinitypublisher


```text
simpleicons-7/A/Affinitypublisher
```

```text
include('simpleicons-7/A/Affinitypublisher')
```



| Illustration | Affinitypublisher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Affinitypublisher.png) | ![illustration for Affinitypublisher](../../simpleicons-7/A/Affinitypublisher.Local.png) |




## Affinitypublisher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Affinitypublisher
include('simpleicons-7/A/Affinitypublisher')

' renders the element
Affinitypublisher('Affinitypublisher', 'Affinitypublisher', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Affinitypublisher
include('simpleicons-7/A/Affinitypublisher')

' renders the element
Affinitypublisher('Affinitypublisher', 'Affinitypublisher', 'an optional tech label', 'an optional description')
@enduml
```


# Snyk


```text
simpleicons-14/S/Snyk
```

```text
include('simpleicons-14/S/Snyk')
```



| Illustration | Snyk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Snyk.png) | ![illustration for Snyk](../../simpleicons-14/S/Snyk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnykXs>`
- `<$SnykSm>`
- `<$SnykMd>`
- `<$SnykLg>`





## Snyk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Snyk
include('simpleicons-14/S/Snyk')

' renders the element
Snyk('Snyk', 'Snyk', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Snyk
include('simpleicons-14/S/Snyk')

' renders the element
Snyk('Snyk', 'Snyk', 'an optional tech label', 'an optional description')
@enduml
```


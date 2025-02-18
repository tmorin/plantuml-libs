# Teamcity


```text
simpleicons-14/T/Teamcity
```

```text
include('simpleicons-14/T/Teamcity')
```



| Illustration | Teamcity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Teamcity.png) | ![illustration for Teamcity](../../simpleicons-14/T/Teamcity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeamcityXs>`
- `<$TeamcitySm>`
- `<$TeamcityMd>`
- `<$TeamcityLg>`





## Teamcity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Teamcity
include('simpleicons-14/T/Teamcity')

' renders the element
Teamcity('Teamcity', 'Teamcity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teamcity
include('simpleicons-14/T/Teamcity')

' renders the element
Teamcity('Teamcity', 'Teamcity', 'an optional tech label', 'an optional description')
@enduml
```


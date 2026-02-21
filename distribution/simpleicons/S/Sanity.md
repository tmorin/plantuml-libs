# Sanity


```text
simpleicons/S/Sanity
```

```text
include('simpleicons/S/Sanity')
```



| Illustration | Sanity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sanity.png) | ![illustration for Sanity](../../simpleicons/S/Sanity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SanityXs>`
- `<$SanitySm>`
- `<$SanityMd>`
- `<$SanityLg>`





## Sanity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sanity
include('simpleicons/S/Sanity')

' renders the element
Sanity('Sanity', 'Sanity', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sanity
include('simpleicons/S/Sanity')

' renders the element
Sanity('Sanity', 'Sanity', 'an optional tech label', 'an optional description')
@enduml
```


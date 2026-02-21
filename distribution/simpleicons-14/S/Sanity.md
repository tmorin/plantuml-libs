# Sanity


```text
simpleicons-14/S/Sanity
```

```text
include('simpleicons-14/S/Sanity')
```



| Illustration | Sanity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sanity.png) | ![illustration for Sanity](../../simpleicons-14/S/Sanity.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sanity
include('simpleicons-14/S/Sanity')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sanity
include('simpleicons-14/S/Sanity')

' renders the element
Sanity('Sanity', 'Sanity', 'an optional tech label', 'an optional description')
@enduml
```


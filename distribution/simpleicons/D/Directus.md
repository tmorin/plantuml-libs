# Directus


```text
simpleicons/D/Directus
```

```text
include('simpleicons/D/Directus')
```



| Illustration | Directus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Directus.png) | ![illustration for Directus](../../simpleicons/D/Directus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirectusXs>`
- `<$DirectusSm>`
- `<$DirectusMd>`
- `<$DirectusLg>`





## Directus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Directus
include('simpleicons/D/Directus')

' renders the element
Directus('Directus', 'Directus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Directus
include('simpleicons/D/Directus')

' renders the element
Directus('Directus', 'Directus', 'an optional tech label', 'an optional description')
@enduml
```


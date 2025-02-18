# Astro


```text
simpleicons-14/A/Astro
```

```text
include('simpleicons-14/A/Astro')
```



| Illustration | Astro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Astro.png) | ![illustration for Astro](../../simpleicons-14/A/Astro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AstroXs>`
- `<$AstroSm>`
- `<$AstroMd>`
- `<$AstroLg>`





## Astro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Astro
include('simpleicons-14/A/Astro')

' renders the element
Astro('Astro', 'Astro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Astro
include('simpleicons-14/A/Astro')

' renders the element
Astro('Astro', 'Astro', 'an optional tech label', 'an optional description')
@enduml
```


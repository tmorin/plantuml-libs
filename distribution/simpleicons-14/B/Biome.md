# Biome


```text
simpleicons-14/B/Biome
```

```text
include('simpleicons-14/B/Biome')
```



| Illustration | Biome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Biome.png) | ![illustration for Biome](../../simpleicons-14/B/Biome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BiomeXs>`
- `<$BiomeSm>`
- `<$BiomeMd>`
- `<$BiomeLg>`





## Biome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Biome
include('simpleicons-14/B/Biome')

' renders the element
Biome('Biome', 'Biome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Biome
include('simpleicons-14/B/Biome')

' renders the element
Biome('Biome', 'Biome', 'an optional tech label', 'an optional description')
@enduml
```


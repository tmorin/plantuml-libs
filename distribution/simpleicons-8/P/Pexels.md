# Pexels


```text
simpleicons-8/P/Pexels
```

```text
include('simpleicons-8/P/Pexels')
```



| Illustration | Pexels |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pexels.png) | ![illustration for Pexels](../../simpleicons-8/P/Pexels.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PexelsXs>`
- `<$PexelsSm>`
- `<$PexelsMd>`
- `<$PexelsLg>`





## Pexels

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pexels
include('simpleicons-8/P/Pexels')

' renders the element
Pexels('Pexels', 'Pexels', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pexels
include('simpleicons-8/P/Pexels')

' renders the element
Pexels('Pexels', 'Pexels', 'an optional tech label', 'an optional description')
@enduml
```


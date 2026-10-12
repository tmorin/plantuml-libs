# Cachyos


```text
simpleicons/C/Cachyos
```

```text
include('simpleicons/C/Cachyos')
```



| Illustration | Cachyos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cachyos.png) | ![illustration for Cachyos](../../simpleicons/C/Cachyos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CachyosXs>`
- `<$CachyosSm>`
- `<$CachyosMd>`
- `<$CachyosLg>`





## Cachyos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cachyos
include('simpleicons/C/Cachyos')

' renders the element
Cachyos('Cachyos', 'Cachyos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cachyos
include('simpleicons/C/Cachyos')

' renders the element
Cachyos('Cachyos', 'Cachyos', 'an optional tech label', 'an optional description')
@enduml
```


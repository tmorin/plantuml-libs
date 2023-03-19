# Genius


```text
simpleicons-8/G/Genius
```

```text
include('simpleicons-8/G/Genius')
```



| Illustration | Genius |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Genius.png) | ![illustration for Genius](../../simpleicons-8/G/Genius.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GeniusXs>`
- `<$GeniusSm>`
- `<$GeniusMd>`
- `<$GeniusLg>`





## Genius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Genius
include('simpleicons-8/G/Genius')

' renders the element
Genius('Genius', 'Genius', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Genius
include('simpleicons-8/G/Genius')

' renders the element
Genius('Genius', 'Genius', 'an optional tech label', 'an optional description')
@enduml
```


# Morrisons


```text
simpleicons/M/Morrisons
```

```text
include('simpleicons/M/Morrisons')
```



| Illustration | Morrisons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Morrisons.png) | ![illustration for Morrisons](../../simpleicons/M/Morrisons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MorrisonsXs>`
- `<$MorrisonsSm>`
- `<$MorrisonsMd>`
- `<$MorrisonsLg>`





## Morrisons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Morrisons
include('simpleicons/M/Morrisons')

' renders the element
Morrisons('Morrisons', 'Morrisons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Morrisons
include('simpleicons/M/Morrisons')

' renders the element
Morrisons('Morrisons', 'Morrisons', 'an optional tech label', 'an optional description')
@enduml
```


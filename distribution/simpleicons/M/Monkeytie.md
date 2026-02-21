# Monkeytie


```text
simpleicons/M/Monkeytie
```

```text
include('simpleicons/M/Monkeytie')
```



| Illustration | Monkeytie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Monkeytie.png) | ![illustration for Monkeytie](../../simpleicons/M/Monkeytie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonkeytieXs>`
- `<$MonkeytieSm>`
- `<$MonkeytieMd>`
- `<$MonkeytieLg>`





## Monkeytie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Monkeytie
include('simpleicons/M/Monkeytie')

' renders the element
Monkeytie('Monkeytie', 'Monkeytie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monkeytie
include('simpleicons/M/Monkeytie')

' renders the element
Monkeytie('Monkeytie', 'Monkeytie', 'an optional tech label', 'an optional description')
@enduml
```


# Monkeytie


```text
simpleicons-8/M/Monkeytie
```

```text
include('simpleicons-8/M/Monkeytie')
```



| Illustration | Monkeytie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Monkeytie.png) | ![illustration for Monkeytie](../../simpleicons-8/M/Monkeytie.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Monkeytie
include('simpleicons-8/M/Monkeytie')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Monkeytie
include('simpleicons-8/M/Monkeytie')

' renders the element
Monkeytie('Monkeytie', 'Monkeytie', 'an optional tech label', 'an optional description')
@enduml
```


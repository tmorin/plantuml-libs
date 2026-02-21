# Spyderide


```text
simpleicons/S/Spyderide
```

```text
include('simpleicons/S/Spyderide')
```



| Illustration | Spyderide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spyderide.png) | ![illustration for Spyderide](../../simpleicons/S/Spyderide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpyderideXs>`
- `<$SpyderideSm>`
- `<$SpyderideMd>`
- `<$SpyderideLg>`





## Spyderide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spyderide
include('simpleicons/S/Spyderide')

' renders the element
Spyderide('Spyderide', 'Spyderide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spyderide
include('simpleicons/S/Spyderide')

' renders the element
Spyderide('Spyderide', 'Spyderide', 'an optional tech label', 'an optional description')
@enduml
```


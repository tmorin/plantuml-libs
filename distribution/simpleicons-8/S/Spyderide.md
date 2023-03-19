# Spyderide


```text
simpleicons-8/S/Spyderide
```

```text
include('simpleicons-8/S/Spyderide')
```



| Illustration | Spyderide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Spyderide.png) | ![illustration for Spyderide](../../simpleicons-8/S/Spyderide.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Spyderide
include('simpleicons-8/S/Spyderide')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Spyderide
include('simpleicons-8/S/Spyderide')

' renders the element
Spyderide('Spyderide', 'Spyderide', 'an optional tech label', 'an optional description')
@enduml
```


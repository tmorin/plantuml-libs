# Mewe


```text
simpleicons-14/M/Mewe
```

```text
include('simpleicons-14/M/Mewe')
```



| Illustration | Mewe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mewe.png) | ![illustration for Mewe](../../simpleicons-14/M/Mewe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MeweXs>`
- `<$MeweSm>`
- `<$MeweMd>`
- `<$MeweLg>`





## Mewe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mewe
include('simpleicons-14/M/Mewe')

' renders the element
Mewe('Mewe', 'Mewe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mewe
include('simpleicons-14/M/Mewe')

' renders the element
Mewe('Mewe', 'Mewe', 'an optional tech label', 'an optional description')
@enduml
```


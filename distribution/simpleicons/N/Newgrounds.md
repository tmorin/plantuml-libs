# Newgrounds


```text
simpleicons/N/Newgrounds
```

```text
include('simpleicons/N/Newgrounds')
```



| Illustration | Newgrounds |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Newgrounds.png) | ![illustration for Newgrounds](../../simpleicons/N/Newgrounds.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NewgroundsXs>`
- `<$NewgroundsSm>`
- `<$NewgroundsMd>`
- `<$NewgroundsLg>`





## Newgrounds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Newgrounds
include('simpleicons/N/Newgrounds')

' renders the element
Newgrounds('Newgrounds', 'Newgrounds', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Newgrounds
include('simpleicons/N/Newgrounds')

' renders the element
Newgrounds('Newgrounds', 'Newgrounds', 'an optional tech label', 'an optional description')
@enduml
```


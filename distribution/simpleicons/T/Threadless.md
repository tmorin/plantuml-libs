# Threadless


```text
simpleicons/T/Threadless
```

```text
include('simpleicons/T/Threadless')
```



| Illustration | Threadless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Threadless.png) | ![illustration for Threadless](../../simpleicons/T/Threadless.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThreadlessXs>`
- `<$ThreadlessSm>`
- `<$ThreadlessMd>`
- `<$ThreadlessLg>`





## Threadless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Threadless
include('simpleicons/T/Threadless')

' renders the element
Threadless('Threadless', 'Threadless', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Threadless
include('simpleicons/T/Threadless')

' renders the element
Threadless('Threadless', 'Threadless', 'an optional tech label', 'an optional description')
@enduml
```


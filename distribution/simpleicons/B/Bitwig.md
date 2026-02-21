# Bitwig


```text
simpleicons/B/Bitwig
```

```text
include('simpleicons/B/Bitwig')
```



| Illustration | Bitwig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bitwig.png) | ![illustration for Bitwig](../../simpleicons/B/Bitwig.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitwigXs>`
- `<$BitwigSm>`
- `<$BitwigMd>`
- `<$BitwigLg>`





## Bitwig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bitwig
include('simpleicons/B/Bitwig')

' renders the element
Bitwig('Bitwig', 'Bitwig', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitwig
include('simpleicons/B/Bitwig')

' renders the element
Bitwig('Bitwig', 'Bitwig', 'an optional tech label', 'an optional description')
@enduml
```


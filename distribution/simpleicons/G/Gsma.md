# Gsma


```text
simpleicons/G/Gsma
```

```text
include('simpleicons/G/Gsma')
```



| Illustration | Gsma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gsma.png) | ![illustration for Gsma](../../simpleicons/G/Gsma.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GsmaXs>`
- `<$GsmaSm>`
- `<$GsmaMd>`
- `<$GsmaLg>`





## Gsma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gsma
include('simpleicons/G/Gsma')

' renders the element
Gsma('Gsma', 'Gsma', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gsma
include('simpleicons/G/Gsma')

' renders the element
Gsma('Gsma', 'Gsma', 'an optional tech label', 'an optional description')
@enduml
```


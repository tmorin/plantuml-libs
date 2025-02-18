# Rome


```text
simpleicons-14/R/Rome
```

```text
include('simpleicons-14/R/Rome')
```



| Illustration | Rome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rome.png) | ![illustration for Rome](../../simpleicons-14/R/Rome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RomeXs>`
- `<$RomeSm>`
- `<$RomeMd>`
- `<$RomeLg>`





## Rome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rome
include('simpleicons-14/R/Rome')

' renders the element
Rome('Rome', 'Rome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rome
include('simpleicons-14/R/Rome')

' renders the element
Rome('Rome', 'Rome', 'an optional tech label', 'an optional description')
@enduml
```


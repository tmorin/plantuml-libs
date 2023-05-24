# Bento


```text
simpleicons-8/B/Bento
```

```text
include('simpleicons-8/B/Bento')
```



| Illustration | Bento |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bento.png) | ![illustration for Bento](../../simpleicons-8/B/Bento.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BentoXs>`
- `<$BentoSm>`
- `<$BentoMd>`
- `<$BentoLg>`





## Bento

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bento
include('simpleicons-8/B/Bento')

' renders the element
Bento('Bento', 'Bento', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bento
include('simpleicons-8/B/Bento')

' renders the element
Bento('Bento', 'Bento', 'an optional tech label', 'an optional description')
@enduml
```


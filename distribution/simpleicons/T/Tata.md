# Tata


```text
simpleicons/T/Tata
```

```text
include('simpleicons/T/Tata')
```



| Illustration | Tata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tata.png) | ![illustration for Tata](../../simpleicons/T/Tata.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TataXs>`
- `<$TataSm>`
- `<$TataMd>`
- `<$TataLg>`





## Tata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tata
include('simpleicons/T/Tata')

' renders the element
Tata('Tata', 'Tata', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tata
include('simpleicons/T/Tata')

' renders the element
Tata('Tata', 'Tata', 'an optional tech label', 'an optional description')
@enduml
```


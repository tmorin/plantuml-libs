# Fossa


```text
simpleicons-14/F/Fossa
```

```text
include('simpleicons-14/F/Fossa')
```



| Illustration | Fossa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fossa.png) | ![illustration for Fossa](../../simpleicons-14/F/Fossa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FossaXs>`
- `<$FossaSm>`
- `<$FossaMd>`
- `<$FossaLg>`





## Fossa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fossa
include('simpleicons-14/F/Fossa')

' renders the element
Fossa('Fossa', 'Fossa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fossa
include('simpleicons-14/F/Fossa')

' renders the element
Fossa('Fossa', 'Fossa', 'an optional tech label', 'an optional description')
@enduml
```


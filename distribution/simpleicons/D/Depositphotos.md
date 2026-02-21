# Depositphotos


```text
simpleicons/D/Depositphotos
```

```text
include('simpleicons/D/Depositphotos')
```



| Illustration | Depositphotos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Depositphotos.png) | ![illustration for Depositphotos](../../simpleicons/D/Depositphotos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DepositphotosXs>`
- `<$DepositphotosSm>`
- `<$DepositphotosMd>`
- `<$DepositphotosLg>`





## Depositphotos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Depositphotos
include('simpleicons/D/Depositphotos')

' renders the element
Depositphotos('Depositphotos', 'Depositphotos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Depositphotos
include('simpleicons/D/Depositphotos')

' renders the element
Depositphotos('Depositphotos', 'Depositphotos', 'an optional tech label', 'an optional description')
@enduml
```


# Textsms


```text
material/Communication/Textsms
```

```text
include('material/Communication/Textsms')
```



| Illustration | Textsms |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Textsms.png) | ![illustration for Textsms](../../material/Communication/Textsms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextsmsXs>`
- `<$TextsmsSm>`
- `<$TextsmsMd>`
- `<$TextsmsLg>`





## Textsms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Textsms
include('material/Communication/Textsms')

' renders the element
Textsms('Textsms', 'Textsms', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Textsms
include('material/Communication/Textsms')

' renders the element
Textsms('Textsms', 'Textsms', 'an optional tech label', 'an optional description')
@enduml
```


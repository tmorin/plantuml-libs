# Contactless


```text
material/Action/Contactless
```

```text
include('material/Action/Contactless')
```



| Illustration | Contactless |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Contactless.png) | ![illustration for Contactless](../../material/Action/Contactless.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContactlessXs>`
- `<$ContactlessSm>`
- `<$ContactlessMd>`
- `<$ContactlessLg>`





## Contactless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Contactless
include('material/Action/Contactless')

' renders the element
Contactless('Contactless', 'Contactless', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contactless
include('material/Action/Contactless')

' renders the element
Contactless('Contactless', 'Contactless', 'an optional tech label', 'an optional description')
@enduml
```


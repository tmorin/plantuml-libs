# Contao


```text
simpleicons-14/C/Contao
```

```text
include('simpleicons-14/C/Contao')
```



| Illustration | Contao |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Contao.png) | ![illustration for Contao](../../simpleicons-14/C/Contao.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContaoXs>`
- `<$ContaoSm>`
- `<$ContaoMd>`
- `<$ContaoLg>`





## Contao

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Contao
include('simpleicons-14/C/Contao')

' renders the element
Contao('Contao', 'Contao', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contao
include('simpleicons-14/C/Contao')

' renders the element
Contao('Contao', 'Contao', 'an optional tech label', 'an optional description')
@enduml
```


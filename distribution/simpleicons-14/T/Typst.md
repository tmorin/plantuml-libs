# Typst


```text
simpleicons-14/T/Typst
```

```text
include('simpleicons-14/T/Typst')
```



| Illustration | Typst |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Typst.png) | ![illustration for Typst](../../simpleicons-14/T/Typst.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TypstXs>`
- `<$TypstSm>`
- `<$TypstMd>`
- `<$TypstLg>`





## Typst

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Typst
include('simpleicons-14/T/Typst')

' renders the element
Typst('Typst', 'Typst', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Typst
include('simpleicons-14/T/Typst')

' renders the element
Typst('Typst', 'Typst', 'an optional tech label', 'an optional description')
@enduml
```


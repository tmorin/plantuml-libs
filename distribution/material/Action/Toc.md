# Toc


```text
material/Action/Toc
```

```text
include('material/Action/Toc')
```



| Illustration | Toc |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Toc.png) | ![illustration for Toc](../../material/Action/Toc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TocXs>`
- `<$TocSm>`
- `<$TocMd>`
- `<$TocLg>`





## Toc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Toc
include('material/Action/Toc')

' renders the element
Toc('Toc', 'Toc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toc
include('material/Action/Toc')

' renders the element
Toc('Toc', 'Toc', 'an optional tech label', 'an optional description')
@enduml
```


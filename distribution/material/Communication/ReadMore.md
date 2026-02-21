# ReadMore


```text
material/Communication/ReadMore
```

```text
include('material/Communication/ReadMore')
```



| Illustration | ReadMore |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ReadMore.png) | ![illustration for ReadMore](../../material/Communication/ReadMore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReadMoreXs>`
- `<$ReadMoreSm>`
- `<$ReadMoreMd>`
- `<$ReadMoreLg>`





## ReadMore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ReadMore
include('material/Communication/ReadMore')

' renders the element
ReadMore('ReadMore', 'Read More', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ReadMore
include('material/Communication/ReadMore')

' renders the element
ReadMore('ReadMore', 'Read More', 'an optional tech label', 'an optional description')
@enduml
```


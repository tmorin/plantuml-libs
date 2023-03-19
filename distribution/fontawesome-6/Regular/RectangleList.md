# RectangleList


```text
fontawesome-6/Regular/RectangleList
```

```text
include('fontawesome-6/Regular/RectangleList')
```



| Illustration | RectangleList |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/RectangleList.png) | ![illustration for RectangleList](../../fontawesome-6/Regular/RectangleList.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RectangleListXs>`
- `<$RectangleListSm>`
- `<$RectangleListMd>`
- `<$RectangleListLg>`





## RectangleList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RectangleList
include('fontawesome-6/Regular/RectangleList')

' renders the element
RectangleList('RectangleList', 'Rectangle List', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RectangleList
include('fontawesome-6/Regular/RectangleList')

' renders the element
RectangleList('RectangleList', 'Rectangle List', 'an optional tech label', 'an optional description')
@enduml
```


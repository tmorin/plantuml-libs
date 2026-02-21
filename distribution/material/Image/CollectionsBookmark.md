# CollectionsBookmark


```text
material/Image/CollectionsBookmark
```

```text
include('material/Image/CollectionsBookmark')
```



| Illustration | CollectionsBookmark |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CollectionsBookmark.png) | ![illustration for CollectionsBookmark](../../material/Image/CollectionsBookmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CollectionsBookmarkXs>`
- `<$CollectionsBookmarkSm>`
- `<$CollectionsBookmarkMd>`
- `<$CollectionsBookmarkLg>`





## CollectionsBookmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CollectionsBookmark
include('material/Image/CollectionsBookmark')

' renders the element
CollectionsBookmark('CollectionsBookmark', 'Collections Bookmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CollectionsBookmark
include('material/Image/CollectionsBookmark')

' renders the element
CollectionsBookmark('CollectionsBookmark', 'Collections Bookmark', 'an optional tech label', 'an optional description')
@enduml
```


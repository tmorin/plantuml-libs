# Paperswithcode


```text
simpleicons-14/P/Paperswithcode
```

```text
include('simpleicons-14/P/Paperswithcode')
```



| Illustration | Paperswithcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Paperswithcode.png) | ![illustration for Paperswithcode](../../simpleicons-14/P/Paperswithcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaperswithcodeXs>`
- `<$PaperswithcodeSm>`
- `<$PaperswithcodeMd>`
- `<$PaperswithcodeLg>`





## Paperswithcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Paperswithcode
include('simpleicons-14/P/Paperswithcode')

' renders the element
Paperswithcode('Paperswithcode', 'Paperswithcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paperswithcode
include('simpleicons-14/P/Paperswithcode')

' renders the element
Paperswithcode('Paperswithcode', 'Paperswithcode', 'an optional tech label', 'an optional description')
@enduml
```


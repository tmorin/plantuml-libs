# _7Zip


```text
simpleicons-14/_/_7Zip
```

```text
include('simpleicons-14/_/_7Zip')
```



| Illustration | _7Zip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/_/_7Zip.png) | ![illustration for _7Zip](../../simpleicons-14/_/_7Zip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_7ZipXs>`
- `<$_7ZipSm>`
- `<$_7ZipMd>`
- `<$_7ZipLg>`





## _7Zip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element _7Zip
include('simpleicons-14/_/_7Zip')

' renders the element
_7Zip('7zip', '7zip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _7Zip
include('simpleicons-14/_/_7Zip')

' renders the element
_7Zip('7zip', '7zip', 'an optional tech label', 'an optional description')
@enduml
```


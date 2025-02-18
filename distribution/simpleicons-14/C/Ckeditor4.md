# Ckeditor4


```text
simpleicons-14/C/Ckeditor4
```

```text
include('simpleicons-14/C/Ckeditor4')
```



| Illustration | Ckeditor4 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Ckeditor4.png) | ![illustration for Ckeditor4](../../simpleicons-14/C/Ckeditor4.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Ckeditor4Xs>`
- `<$Ckeditor4Sm>`
- `<$Ckeditor4Md>`
- `<$Ckeditor4Lg>`





## Ckeditor4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ckeditor4
include('simpleicons-14/C/Ckeditor4')

' renders the element
Ckeditor4('Ckeditor4', 'Ckeditor4', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ckeditor4
include('simpleicons-14/C/Ckeditor4')

' renders the element
Ckeditor4('Ckeditor4', 'Ckeditor4', 'an optional tech label', 'an optional description')
@enduml
```


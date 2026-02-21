# Formik


```text
simpleicons/F/Formik
```

```text
include('simpleicons/F/Formik')
```



| Illustration | Formik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Formik.png) | ![illustration for Formik](../../simpleicons/F/Formik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormikXs>`
- `<$FormikSm>`
- `<$FormikMd>`
- `<$FormikLg>`





## Formik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Formik
include('simpleicons/F/Formik')

' renders the element
Formik('Formik', 'Formik', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Formik
include('simpleicons/F/Formik')

' renders the element
Formik('Formik', 'Formik', 'an optional tech label', 'an optional description')
@enduml
```

